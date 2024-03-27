```
docker run -v /path/to/local/directory:/inside/docker/path -i grafana/k6 run /inside/docker/path/k6.js
```

```
docker run -v D:\Code_Test:/inside/docker/path -i grafana/k6 run /inside/docker/path/k6.js
```

```
docker run -e "FILE_NAMES=baocao_1.jpg,baocao_2.jpg,baocao_3.jpg,baocao_5.jpg" -v D:\Code_Test:/inside/docker/path -i grafana/k6 run /inside/docker/path/k6.js

```
