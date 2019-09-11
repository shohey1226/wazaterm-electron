# Wazaterm electron app


[Wazaterm](https://www.wazaterm.com) is a cloud terminal to run anywhere on any device.
Thease are binaries(Electron app) to run on Mac, Windows and Linux.

## How to build binaries with Eelection/Nativefier

```
$ npm install -g nativefier
```

```
nativefier --name "Wazaterm" "https://www.wazaterm.com"
nativefier --name "Wazaterm" "https://www.wazaterm.com" --platform windows
nativefier --name "Wazaterm" "https://www.wazaterm.com" --platform linux
```

## How to compress binary


```
cd Wazaterm-darwin-x64
zip -r -y Wazaterm.app.zip Wazaterm.app

cd Wazaterm-win32-x64
zip -r -y Wazaterm.exe.zip Wazaterm.exe

cd wazaterm-linux-x64 
tar cvf wazaterm.tar wazaterm 
gzip wazaterm.tar
```

## How to git push large file

```
$ brew install git-lfs
$ cd electron-wazaterm
$ git lfs install
$ git lfs track Wazaterm-darwin-x64/Wazaterm.app.zip 
$ git lfs track Wazaterm-win32-x64/Wazaterm.exe.zip 
$ git lfs track wazaterm-linux-x64/wazaterm.tar.gz 
$ git add .gitattributes
```
