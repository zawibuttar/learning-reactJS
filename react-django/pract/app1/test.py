# app1/tests.py
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth.models import User

class UserRegistrationTestCase(TestCase):
    def setUp(self):
        # Setup the API client
        self.client = APIClient()

    def test_user_registration(self):
        # Define the user data for registration
        data = {
            'username': 'testuser',
            'password': 'testpassword123',
            'email': 'testuser@example.com'
        }

        # Make a POST request to the register endpoint
        response = self.client.post('/auth/register/', data, format='json')

        # Check if the response status is 201 (Created)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Check if the response contains the 'access' and 'refresh' tokens
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

        # Optional: Check if the user was actually created in the database
        user = User.objects.get(username='testuser')
        self.assertIsNotNone(user)
        self.assertEqual(user.email, 'testuser@example.com')
