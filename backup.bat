@echo off
chcp 65001 >nul
echo.
echo ╔══════════════════════════════════════════╗
echo ║   Age in Move — Backup e Commit          ║
echo ║   idade em movimento @age_in_move         ║
echo ╚══════════════════════════════════════════╝
echo.

cd /d "C:\Users\João Teixeira\age-in-move-platform"

:: Data e hora para nome do backup
set DT=%date:~6,4%-%date:~3,2%-%date:~0,2%_%time:~0,2%-%time:~3,2%
set DT=%DT: =0%

:: Criar backup datado
if not exist "backups" mkdir backups
copy "index.html" "backups\index_%DT%.html" >nul
echo [OK] Backup criado: backups\index_%DT%.html

:: Git commit automático
git add .
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "backup: auto-save %DT% - age-in-move platform"
    echo [OK] Commit Git criado
) else (
    echo [--] Sem alteracoes para commitar
)

:: Sincronizar OneDrive
xcopy /E /I /Y "C:\Users\João Teixeira\age-in-move-platform" "C:\Users\João Teixeira\OneDrive\age-in-move-platform" >nul
echo [OK] Sincronizado com OneDrive

echo.
echo ✓ Backup completo! Ficheiro seguro em 3 locais:
echo   1. Local:    C:\Users\João Teixeira\age-in-move-platform\
echo   2. OneDrive: OneDrive\age-in-move-platform\
echo   3. Git:      Histórico de versões local
echo.
echo Proximos passos para segurança total:
echo   → Criar conta em github.com e fazer push
echo   → Ativar backup OneDrive para cloud
echo.
pause
