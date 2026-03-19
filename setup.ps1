npx -y create-vite@latest temp-app --template react-ts --no-interactive
xcopy .\temp-app\* .\ /E /H /C /I /Y
Remove-Item -Recurse -Force temp-app
Remove-Item -Force read_pdf.py
Remove-Item -Force cv_text.txt
npm install
npm install lucide-react
