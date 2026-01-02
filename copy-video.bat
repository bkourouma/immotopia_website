@echo off
REM Script to copy the hero video to the public folder
echo Copying video file...
copy "D:\APP\Immobillier\assets\media\logiciel_gestion_immobilière.mp4" "apps\web\public\videos\logiciel_gestion_immobilière.mp4"
if %ERRORLEVEL% EQU 0 (
    echo Video copied successfully!
) else (
    echo ERROR: Failed to copy video. Please check if the source file exists.
    echo Source: D:\APP\Immobillier\assets\media\logiciel_gestion_immobilière.mp4
    echo Destination: apps\web\public\videos\logiciel_gestion_immobilière.mp4
)
pause


