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
