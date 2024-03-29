from django.test import TestCase
from .models import *
from rest_framework_simplejwt.tokens import AccessToken

class UrlTest(TestCase):

    def setUp(self):
        self.superuser = User.objects.create(username='user', password='123456', is_active=True, is_staff=True, is_superuser=True)
        self.user = User.objects.create(username='user2', password='54231', is_active=True)
        self.superaccess = AccessToken.for_user(self.superuser)
        self.access = AccessToken.for_user(self.user)
    
    def test_homepage(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
    
    def test_swagger(self):
        response = self.client.get('/swagger/')
        self.assertEqual(response.status_code, 200)

    def test_user_info(self):
        header = {'HTTP_AUTHORIZATION': f'JWT {self.access}'}
        response = self.client.get('/auth/users/me/', **header)
        self.assertEqual(response.status_code, 200)
    
    def test_user_auth(self):
        data = {
            'username':'someuser',
            'password':'trtsskldjfsd',
            'full_name':'user2',
        }
        response = self.client.post('/auth/users/', data=data)
        self.assertEqual(response.status_code, 201)

    def test_exercises(self):
        response = self.client.get('/exercises/')
        self.assertEqual(response.status_code, 200)

    def test_exercises_set(self):
        header = {'HTTP_AUTHORIZATION': f'JWT {self.access}'}
        response = self.client.get('/user/exercise-set/', **header)
        self.assertEqual(response.status_code, 200)
    
    def test_muscle_groups(self):
        response = self.client.get('/muscle-groups/')
        self.assertEqual(response.status_code, 200)
    
    def test_feedback(self):
        header = {'HTTP_AUTHORIZATION': f'JWT {self.superaccess}'}
        response = self.client.get('/user/feedback/', **header)
        self.assertEqual(response.status_code, 200)
        header = {'HTTP_AUTHORIZATION': f'JWT {self.access}'}
        response = self.client.get('/user/feedback/', **header)
        self.assertEqual(response.status_code, 403)
        response = self.client.post('/user/feedback/', data={'title':'some text'}, **header)
        self.assertEqual(response.status_code, 200)

    def test_steps(self):
        header = {'HTTP_AUTHORIZATION': f'JWT {self.access}'}
        response = self.client.get('/user/steps/', **header)
        self.assertEqual(response.status_code, 200)
        response = self.client.post('/user/steps/', {'count':12}, **header)
        self.assertEqual(response.status_code, 200)

    def test_nutrition(self):
        header = {'HTTP_AUTHORIZATION': f'JWT {self.access}'}
        response = self.client.get('/user/nutritions/', **header)
        self.assertEqual(response.status_code, 200)
        response = self.client.post('/user/nutritions/', {'quantity':1, 'caloric_intake':1}, **header)
        self.assertEqual(response.status_code, 200)

    def test_userworkout_log(self):
        header = {'HTTP_AUTHORIZATION': f'JWT {self.access}'}
        response = self.client.get('/user/userworkout-log/', **header)
        self.assertEqual(response.status_code, 200)
        response = self.client.post('/user/userworkout-log/', {'count':12}, **header)
        self.assertEqual(response.status_code, 200)

class ModelTests(TestCase):

    def create_user(self, username='sample_user', password='sample_password', email='sample_email@gmail.com', full_name='sample_full_name', height=179, weight=71):
        return User.objects.create(username=username, 
                                   password=password, 
                                   email=email, 
                                   full_name=full_name, 
                                   height=height, 
                                   weight=weight,
                                   country='USA',
                                   steps_target=12000,
                                   sex=self.create_gender())
    
    def create_gender(self):
        return Sex.objects.create(gender='male', slug='male')

    def create_workout(self):
        return UserWorkoutLog.objects.create(user=self.create_user(), duration=1000, calories=1000)
    
    def create_exercise(self):
        return Exercise.objects.create(name='test', description='test', cal_per_min=1000)
    
    def test_create_user_data(self):
        u = self.create_user()
        self.assertTrue(isinstance(u, User))
        self.assertEqual(u.username, 'sample_user')
        self.assertEqual(u.password, 'sample_password')
        self.assertEqual(u.email, 'sample_email@gmail.com')
        self.assertEqual(u.full_name, 'sample_full_name')
        self.assertEqual(u.country, 'USA')
        self.assertEqual(u.steps_target, 12000)
        self.assertEqual(u.sex.gender, 'male')
        self.assertFalse(u.is_active)

    def test_create_user_auto(self):
        u = self.create_user()
        self.assertEqual(u.bmi, 22.2)
        self.assertEqual(u.is_active, False)
    
    def test_workout(self):
        model = self.create_workout()
        self.assertIsInstance(model, UserWorkoutLog)
        self.assertEqual(model.user.username, 'sample_user')
        self.assertEqual(model.duration, 1000)
        self.assertEqual(model.calories, 1000)

    
    def test_feedback(self):
        model = UserFeedback(user=self.create_user(), title='test', stars=5, comment='test')
        self.assertIsInstance(model, UserFeedback)
        self.assertEqual(model.user.username, 'sample_user')
        self.assertEqual(model.title, 'test')
        self.assertEqual(model.stars, 5)
        self.assertEqual(model.comment, 'test')

    def test_steps(self):
        model = StepsCount(user=self.create_user(), count=123)
        self.assertIsInstance(model, StepsCount)
        self.assertEqual(model.user.username, 'sample_user')
        self.assertEqual(model.count, 123)

    def test_exercises(self):
        model = self.create_exercise()
        self.assertIsInstance(model, Exercise)
        self.assertEqual(model.name, 'test')
        self.assertEqual(model.description, 'test')
        self.assertEqual(model.cal_per_min, 1000)

    def test_exerciseset(self):
        model = ExerciseSet.objects.create(log=self.create_workout(), exercise=self.create_exercise(), set_numb=123, reps=123, rest=123)
        self.assertIsInstance(model, ExerciseSet)
        self.assertEqual(model.log.user.username, 'sample_user')
        self.assertEqual(model.exercise.name, 'test')
        self.assertEqual(model.set_numb, 123)
        self.assertEqual(model.reps, 123)
        self.assertEqual(model.rest, 123)

    def test_nutritionlog(self):
        model = NutritionLog.objects.create(user=self.create_user(), food='test', quantity=1, caloric_intake=1)
        self.assertIsInstance(model, NutritionLog)
        self.assertEqual(model.user.username, 'sample_user')
        self.assertEqual(model.food, 'test')
        self.assertEqual(model.quantity, 1)
        self.assertEqual(model.caloric_intake, 1)