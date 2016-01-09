# YouTube External

Simple Chrome extension to allow viewing of YouTube videos in an external player using the website.

## How does this work?

Nothing clever...

1. Content script activates on any YouTube page and adds a new link wherever it finds an existing video link.
2. On page connection is made to an application running on the host (using NativeMessaging functionality)
3. When user clicks on YTX link a message is sent to the native app to launch a native Video player e.g. VLC/OMX


## Why would I want to use this?

My motivation was to resolve my frustration with watching YouTube videos on a Raspberry Pi.  The Pi is more than capable of playling HD video, but doing this in a browser is problematic.  Chromium lacks hardware acceleration, Epiphany is a better option for HTML5 video but still has a long way to go to provide a smooth video playback, especially in full screen.

## Dependencies for the Pi

Unfortunately getting this up and running on the Pi requires a few dependencies to be manually configured.

1. OMX player
2. youtube-dl
3. Native proxy
