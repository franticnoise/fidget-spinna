# Fidget Spinna (Mobile Three.js)

A minimal mobile web fidget spinner game built with Three.js.

## Features
- Black background + light blue outlined polygon spinner
- Touch spin input (drag around center)
- Gyro stabilization using `deviceorientation`
- Minimal tick sound synced to spin speed
- Haptic vibration patterns based on speed up / slow down + spin rhythm

## Run
Use any static web server from this folder.

Example with Python:

```bash
cd /Users/mbenamo/Documents/devgame/fidget-spinna
python3 -m http.server 8080
```

Open on your phone browser:
- `http://<your-computer-local-ip>:8080`

For iPhone Safari:
- Tap **Enable Motion** to grant sensor permission.
- If motion is denied on LAN IP (`http://192.168.x.x`), use HTTPS (for example via ngrok/Cloudflare Tunnel).

## Notes
- Haptics require browser support for `navigator.vibrate`.
- On some iOS versions, vibration support may be limited.
- Audio starts after the first touch (browser autoplay policy).

## iOS App (Native Haptics)
This project can run as a native iOS app using Capacitor, which enables much better haptics than Safari web vibration.

Install dependencies (already done once in this repo):

```bash
cd /Users/mbenamo/Documents/devgame/fidget-spinna
npm install
```

Sync web code into Capacitor + iOS project:

```bash
npm run cap:sync
```

Open in Xcode:

```bash
npm run ios:open
```

Then run on a real iPhone from Xcode. The game will use Capacitor native haptics when available.
