from django.contrib import admin
from .models import User, Sex, UserWorkoutLog, UserFeedback, StepsCount, MuscleGroups, Exercise, ExerciseSet, NutritionLog
from django.utils.html import format_html


class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'email', 'full_name', 'is_active']
    list_display_links = ('id', 'username',)
    list_editable = ('full_name',)
    list_filter = ('is_staff', 'sex', 'country', 'bmi',)
    search_fields = ['username', 'full_name']
    
    def activate(modeladmin, request, queryset):
        queryset.update(is_active=True)
    activate.short_description = 'Activate User'

    def deactivate(modeladmin, request, queryset):
        queryset.update(is_active=False)
    deactivate.short_description = 'Deactivate User'
    actions = [activate, deactivate]


admin.site.register(User, UserAdmin)
# ———————————————————————————————————————————————————————————————————————————————————————
admin.site.register(Sex)
# ———————————————————————————————————————————————————————————————————————————————————————
class UserWorkoutLogAdmin(admin.ModelAdmin):
    list_display = ['user', 'date', 'duration', 'calories']
    list_filter = ['date']

    def user(self, obj):
        return obj.user.username

admin.site.register(UserWorkoutLog, UserWorkoutLogAdmin)
# ———————————————————————————————————————————————————————————————————————————————————————
class ExersiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'cal_per_min', 'image']
    list_editable = ['cal_per_min']

    def image(self, obj):
        return format_html('<img src="{}" width="120"/>'.format(obj.photo.url))
    
admin.site.register(Exercise, ExersiceAdmin)
# ———————————————————————————————————————————————————————————————————————————————————————
class NutritioLogAdmin(admin.ModelAdmin):
    list_display = ['user', 'date']

    def user(self, obj):
        return obj.user.username
    user.admin_short_description = 'User'
    user.admin_order_field = 'user'

admin.site.register(NutritionLog, NutritioLogAdmin)
# ———————————————————————————————————————————————————————————————————————————————————————
class StepsCountAdmin(admin.ModelAdmin):
    list_display = ['user', 'date', 'count']

    list_filter = ['date']
    list_editable = ['count']

    def user(self, obj):
        return obj.user.username
    user.admin_short_description = 'User'
    user.admin_order_field = 'user'

admin.site.register(StepsCount, StepsCountAdmin)
# ———————————————————————————————————————————————————————————————————————————————————————
class UserFeedBackAdmin(admin.ModelAdmin):
    list_display = ['user', 'date', 'stars']
    list_editable = ['stars']
    def user(self, obj):
        return obj.user.username

admin.site.register(UserFeedback, UserFeedBackAdmin)
# ———————————————————————————————————————————————————————————————————————————————————————
class MusclesAdmin(admin.ModelAdmin):
    list_display = ['name', 'image']

    def image(self, obj):
        return format_html('<img src="{}" width="120"/>'.format(obj.photo.url))

admin.site.register(MuscleGroups, MusclesAdmin)
# ———————————————————————————————————————————————————————————————————————————————————————
admin.site.register(ExerciseSet)
