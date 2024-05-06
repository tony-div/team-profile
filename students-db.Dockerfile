FROM mysql

COPY ./create-students.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

# docker build -t students-db -f students-db.Dockerfile .
# docker run --name student-db -p 3307:3306 -e MYSQL_ROOT_PASSWORD=<PASSWORD> -d students-db
# the database server will be available on localhost:3307