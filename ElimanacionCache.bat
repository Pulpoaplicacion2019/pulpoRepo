echo 'Eliminacion de carpeta de la temporal'

cd "F:\TEMP_V\"

echo 'Eliminacion de metro cache'
rd  /S /Q metro-cache

echo ' Eliminacion haste-map-metro'
del /f haste-map-metro-*

pause

echo 'Regreso a la carpeta proyecto'
cd "F:\CLEARMINDS\REACTNATIVE\App\pulpoRepo"

echo 'Eliminar carpeta de modulos'
rd  /S /Q "F:\CLEARMINDS\REACTNATIVE\App\pulpoRepo\node_modules"

echo 'Eliminar build'
rd /S /Q "F:\CLEARMINDS\REACTNATIVE\App\pulpoRepo\android\app\build"

pause

echo 'Eliminacion de cache'
yarn cache clean --force

echo 'Instalacion de modulos'
yarn install

echo 'corre la aplicacion'
react-native run-android