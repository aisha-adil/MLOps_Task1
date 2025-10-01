FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install flask flask_sqlalchemy flask_cors psycopg2-binary
EXPOSE 5000
CMD ["python", "app.py"]
