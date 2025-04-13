from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"}, status=404)
    
@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"}, status=404)
    
@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancy_detail(request, id):
    try:
        vacancies = Vacancy.objects.get(id=id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    except Vacancy.DoesNotExist:
        return Response({"error": "Vacancy not found"}, status=404)
    
@api_view(['GET'])
def vacancy_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)   
