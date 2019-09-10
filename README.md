Frontend layer:
    build: docker build -t client  -f .\Dockerfile .
    run: docker run --d -p 4200:4200  client
    access: open http://localhost:4200

Backend layer:
    Build: docker build -t server  -f .\Dockerfile .
    Run: docker run -d -p 5000:5000  server
    access: open http://localhost:5000 http://localhost:5000/users




    