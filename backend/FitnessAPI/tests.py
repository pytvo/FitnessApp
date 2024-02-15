from django.test import TestCase
from .models import *

class UserTest(TestCase):

    def create_user(self, username='sample_user', password='sample_password', email='sample_email@gmail.com', full_name='sample_full_name', height=179, weight=71):
        return User.objects.create(username=username, password=password, email=email, full_name=full_name, height=height, weight=weight)
    
    def test_create_user_data(self):
        u = self.create_user()
        self.assertTrue(isinstance(u, User))
        self.assertEqual(u.username, 'sample_user')
        self.assertEqual(u.password, 'sample_password')
        self.assertEqual(u.email, 'sample_email@gmail.com')
        self.assertEqual(u.full_name, 'sample_full_name')

    def test_create_user_auto(self):
        u = self.create_user()
        self.assertEqual(u.bmi, 22.2)
        self.assertEqual(u.is_active, False)