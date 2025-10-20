```markdown
# PWA App Shell - Vite + React


Pequeño ejemplo de App Shell con soporte offline usando Service Worker y manifest.


## Qué incluye


- App Shell: Header, Nav, Footer y una vista dinámica `Home` que carga `products.json`.
- Service Worker (`public/sw.js`) que cachea el App Shell y ofrece fallback para contenido dinámico.
- `public/manifest.json` para instalar la app en dispositivos móviles/desktop.
- Instrucciones para probar en local y probar sin conexión.


## Requisitos


- Node.js (>=16)
- npm


## Instalación y ejecución


1. Clona o copia el proyecto.
2. `npm install`
3. `npm run dev` — desarrollo con Vite (service worker se registra en `load`, pero algunos navegadores sólo muestran SW en `https` o `localhost`/dev).


### Probar el build y offline (modo producción)


1. `npm run build`
2. `npm run preview` — Vite servirá la carpeta `dist` en `http://localhost:5173` (por defecto).


Abrir DevTools → Application → Service Workers para ver el SW registrado. En la pestaña `Application` → `Manifest` deberías ver `manifest.json`.


Para probar sin conexión:


- Abre DevTools → Network → marca `Offline`. Actualiza la página. Si el App Shell está correctamente cacheado, la UI principal (cabecera, navegación, pie) debería mostrarse incluso sin red. El contenido dinámico (`products.json`) usa estrategia network-first con fallback a caché.


## Arquitectura (breve)


- **App Shell**: assets HTML/JS/CSS que definen la UI estática de la aplicación (header, nav, footer). Estos se precachean en el Service Worker.
- **Contenido dinámico**: `products.json` (ubicado en `public/`) se solicita en tiempo de ejecución. El Service Worker intenta obtenerlo desde la red primero y cae al caché si la red falla.
- **Service Worker**: instala → cachea App Shell → intercepta `fetch` para servir de caché o red según la ruta.


## Notas y recomendaciones


- Este ejemplo es educativo. Para producción, se recomienda generar la lista de precache dinámicamente durante el build (por ejemplo con Workbox o un plugin de Vite) y apuntar a los assets finales en `dist`.
- Ajusta la lista `APP_SHELL` en `sw.js` para incluir las rutas exactas de los assets generados por Vite en `dist`.


```


---


## Cómo usar


- Copia estos archivos a un proyecto creado con `npm init vite@latest my-app -- --template react` y pega las rutas fielmente (mover `sw.js`, `manifest.json`, `products.json` y `icons/` a `public/`).


---


*Fin del documento.*
