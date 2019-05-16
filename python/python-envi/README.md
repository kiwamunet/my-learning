
### ファイル構成
下記の構成になります。

```
ファイル一覧
├ Dockerfile
├ docker-compose.yml
└ opt
```

#### コンテナ起動
```
$ docker-compose up -d --build
```

#### コンテナへ接続
```
$ docker exec -it python3 bash
```

#### 各種ライブラリをインストール (任意)
```
$ python -m pip install numpy
$ python -m pip install pandas
$ python -m pip install matplotlib
$ python -m pip install networkx
$ python -m pip install pyyaml
$ python -m pip install xlsxwriter
$ python -m pip install tornado
```

#### インストールしたライブラリの確認
```
$ python -m pip list
Package         Version
--------------- -------
cycler          0.10.0 
decorator       4.3.0  
kiwisolver      1.0.1  
matplotlib      2.2.2  
networkx        2.1    
numpy           1.14.3 
pandas          0.22.0 
pip             10.0.1 
pyparsing       2.2.0  
python-dateutil 2.7.2  
pytz            2018.4 
PyYAML          3.12   
setuptools      39.1.0 
six             1.11.0 
tornado         5.0.2  
wheel           0.31.0 
XlsxWriter      1.0.4  
```

#### docker down
```
$ docker-compose down --rmi all
```

