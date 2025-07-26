# 🧚‍♀️ Cocco's World (More like Hello world)

> 🧪 A playground of experiments and learnings with `Three.js`, `React Three Fiber`, and `Blender`.  
> A journey into the world of interactive 3D experiences — one scene at a time.

---

## 📸 Screenshots

### 🧚 Scene Preview
![Scene Preview-1](ScreenShot-2.png)
![Scene Preview-2](CoccoWorld.png)


---

### 🌐 **Live Demo**
🚀 [coccos-world.netlify.app](https://coccos-world.netlify.app)

## 🎥 Project Videos

### 🔹 Demo 1: Scene Interaction Preview  
[🎞️  Watch Demo 1](https://youtu.be/G2m8G8DD-as)

### 🔹 Demo 2: Animation + Tweak Controls
[🎬  Watch Demo 2](https://youtu.be/UJzaEgI9rnQ)

>Credit for all the pre-built models goes to their respective creaters.I tweaked them, gave some of them animations and optimized them a bit. All of them are under various free-use licenses.

---

## 🧠 About

This project is my personal **3D lab** — a place where I explore:

- 🎨 Loading and animating **Blender models**
- 🌀 Creating smooth interactions using **React Three Fiber**
- 💡 Playing with lighting, materials, cameras, shadows, and scene depth
- 🔁 Learning best practices for structuring 3D components in React

> If it's 3D and on the web, this is where I tinker with it!

---

## 🚀 Tech Stack

| Frontend | 3D/Rendering | Assets |
|----------|--------------|--------|
| `React.js` | `Three.js` | `Blender (GLTF)` |
| `React Three Fiber` | `Drei` | `Custom shaders` *(LEARNING🧓)* |
| `JavaScript (ES6)` | `Canvas/WebGL` | — |

---

## 🛠️ How to Run Locally(try playing with it yourself)

```bash
git clone https://github.com/Srijan-Petwal/hello-cocco.git
cd coccos-world
npm install
npm run dev

```
---
## 🐳 Now Runs in Docker!

> You can now run the entire project inside a Docker container — no need to install Node, Vite, or any dependencies manually.

This makes previewing the project locally much easier and cleaner. Ideal for sandbox testing, sharing, or running in isolated environments.
---

## 🧰 What It Takes to Run Locally with Docker

To run this project locally using Docker, you need just a few things set up:

#### ✅ Prerequisites

- **Docker Desktop installed**  
  → [Download Docker](https://www.docker.com/products/docker-desktop)  
- **Working internet connection** (for the first-time image pull)

---

#### 🚀 Steps to Run in Docker

```bash
# Pull and run the container
docker run -it -p 3000:3000 srijan5/cocco-world