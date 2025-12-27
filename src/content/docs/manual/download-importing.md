---
title: Download Importing
description: Automatically import music from your downloads folder
---

Tauon can monitor your downloads folder and make it easy to import new music with just one click.

![Download import button](../../../assets/dl01.jpg)

## How It Works

When a new music archive or folder is detected in your downloads folder, a button appears that lets you immediately import that item.

## Setup

To enable this feature, go to **MENU > Settings... > Functions** and enable:

1. **"Monitor download folders"** - Watches for new files
2. **"Extract archives on import"** - Automatically extracts compressed files

Optional settings:
- **"Trash archive after extraction"** - Removes the archive after extracting
- **"Always extract to music folder"** - Extracts to your music library folder

![Download import settings](../../../assets/dl02.png)

## Supported Formats

- **Folders** - Drag and drop or auto-detect
- **ZIP archives** - Automatically extracted
- **7z archives** - Requires additional setup (see below)
- **RAR archives** - Requires additional setup (see below)

:::note[File Age Limit]
Items older than one hour are ignored by the auto-detection.
:::

## Downloads Playlist

Items will be imported to the playlist you've flagged as the **downloads playlist**. To set this:

1. Right click a playlist tab
2. Select **"Misc..." > "Set as Downloads Playlist"**

If no downloads playlist is set, items will be imported to the currently viewed playlist.

## Advanced Archive Support

### 7z and RAR Support

To use 7z and RAR archives, you need to install additional packages:

**AUR:**
```bash
# Install optional packages
sudo pacman -S unrar p7zip
```

**Flatpak:**
```bash
# Install host packages
sudo apt install unrar p7zip-full  # Ubuntu/Debian
# or
sudo dnf install unrar p7zip        # Fedora

# Grant permission to run commands in host environment
sudo flatpak override com.github.taiko2k.tauonmb --talk-name=org.freedesktop.Flatpak
```

**Snap:**
These packages are included by default.

:::caution[Password Protected Archives]
Password protected archives are not supported.
:::

## Tips

- Keep your downloads folder organized for best results
- The feature works great with music downloads from Bandcamp, etc.
- You can disable auto-trash of archives if you want to keep backups
