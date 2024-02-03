from rest_framework.views import APIView
from rest_framework.response import Response

class SomethingView(APIView):
    def get(self, request, format=None):
        word = 'hello world'
        return Response({'response': f'Example: {word}'})