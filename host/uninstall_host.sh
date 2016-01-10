#!/bin/sh
# Copyright 2013 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

set -e
TARGET_DIR="$HOME/.config/chromium/NativeMessagingHosts"
HOST_NAME=com.ytx.omxplayer
rm "$TARGET_DIR/com.ytx.omxplayer.json"
echo "Native messaging host $HOST_NAME has been uninstalled."
