# 🚀 Bienvenido al Challenge de Mercado Libre

¡Hola! Te presento mi desarrollo para el challenge técnico de **Mercado Libre**.

---

## 📁 Estructura del Proyecto

El challenge está dividido en dos carpetas principales:

- `meli-api`: Backend desarrollado en **NestJS**
- `meli-web`: Frontend desarrollado en **Next.js**

---

## ⚙️ Precondiciones

Antes de ejecutar el proyecto, asegurate de tener instalado:

- **Node.js** v18 o superior
- **NPM** v9 o superior

---

## 🛠️ Pasos para correr el proyecto localmente

### 1. Entrar a la carpeta del backend:

```bash
cd meli-api
```

### 2. Crear el archivo `.env` con el siguiente contenido:

```
MELI_API_URL=https://api.mercadolibre.com/sites/MLA
PORT=3000
```

### 3. Instalar dependencias:

```bash
npm install
```

### 4. Compilar la aplicación:

```bash
npm run build
```

### 5. Ejecutar el servidor en modo desarrollo:

```bash
npm run start:dev
```

---

### 6. En otra terminal, ir a la carpeta del frontend:

```bash
cd ../meli-web
```

### 7. Instalar dependencias del frontend:

```bash
npm install
```

### 8. Ejecutar la aplicación web:

```bash
npm run dev
```

---

## 🔍 ¡Listo para probar!

Abrí tu navegador y accedé a [http://localhost:3001](http://localhost:3001) para comenzar a explorar la aplicación.

> ⚠️ **Importante:** Este proyecto utiliza datos mockeados.  
> Por eso, para probar correctamente la funcionalidad de búsqueda, se recomienda utilizar términos como:

- `ipod`
- `notebook`
- `camera`

---

Cualquier cosnulta o sugerencia es bienvenida! te dejo mi [LinkedIn](https://www.linkedin.com/in/josue-bacca/)
Gracias por tu tiempo  
**Josué Bacca**
