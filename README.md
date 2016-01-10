# YouTube External

Simple Chromium extension to allow '1 click' viewing of YouTube videos in OMXPlayer on the Raspberry Pi.

## Why would you want to use this?

The Pi is more than capable of playling HD video, but doing this in a browser is problematic.  Chromium lacks hardware acceleration, Epiphany is a better option for HTML5 video but still has a long way to go to provide a smooth video playback, especially in full screen. OMXPlayer however does an amazing job but ideally you wan't to launch videos from the browser, and now you can :).

## How does this work?

Nothing clever...

1. Content script activates on any YouTube page and adds a new link wherever it finds an existing video link.
2. On page load connection is made to an application running on the host (using Chromium NativeMessaging functionality)
3. When user clicks on YTX link a message is sent to the native app to launch a native Video player e.g. VLC/OMX

## Dependencies for the Pi

Unfortunately getting this up and running on the Pi requires a few dependencies to be manually configured.

1. OMX player (installed by default on Raspbian Jessie)
2. youtube-dl (`sudo apt-get install youtube-dl`)
3. A recent chromium (i.e. Blink not webkit based - so this will only really work on Jessie - see these instructions `http://conoroneill.net/running-the-latest-chromium-45-on-debian-jessie-on-your-raspberry-pi-2/`)
4. Install our native app which will proxy requests from Chromium to OMX Player `cd host && ./install.sh`

## ToDo/Issues etc.

* There is no need to use JQuery, I was being very lazy - will refactor to use Vanilla JS shortly.
* Could do with writing a bootstrap script that installs all the deps.
* I have no idea whether this exposes any security concerns, one should always be wary with extensions - especially if they are invoiking native code!  So use at your own risk.
