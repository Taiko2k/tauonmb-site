---
title: Smart Playlists
description: Create dynamic playlists with generators
---

Generator playlists (also called smart or filter playlists) allow you to create derivative playlists based on the content of another playlist. This is the main way of creating a filtered view of a playlist.

![Generator menu](../../../assets/t08.jpg)

## Creating Generator Playlists

### Using Presets

The quickest way to create a generated playlist:

1. Right click a playlist tab
2. Select **"Generate..."**
3. Choose a preset from the menu

Common presets include:
- Filter by genre
- Filter by year
- Sort by play count
- Recently added
- And more!

### Automatic Generation

Generated playlists are also created automatically when you use:
- **Global search** - Creates a filtered playlist of search results
- **Quick find** with `Shift` + `Enter` - Creates a playlist of matching tracks

## Regenerating Playlists

Once a generated playlist has been created, you can reload it:

1. Right click the playlist tab
2. Select **"Regenerate"**

This updates the playlist based on any changes to the source playlist.

## Auto-Regenerate

By default, you need to manually regenerate playlists. To enable automatic updates:

**Globally:**
- Go to **MENU > Settings...**
- Enable **"Auto regenerate playlists"**

**Per Playlist:**
- Edit the generator and add the code `auto`

## Manual Generator Creation

You can create custom generator playlists with specific combinations of searches, filters, and sorters:

1. Right click a playlist tab
2. Select **"Misc..." > "Edit generator..."**
3. Enter generator codes

For detailed information on generator codes, see the [Generator Codes documentation](https://github.com/Taiko2k/TauonMusicBox/wiki/Generator-Codes).

## Workflow Tips

:::tip[Recommended Workflow]
The general idea is to:
1. Import your music library to a single **source playlist**
2. Create and remove generated playlists as needed
3. Use generated playlists to create filtered/sorted views of your music

This keeps your original library intact while giving you flexible views.
:::

## Examples

Here are some common use cases:

- **Genre playlists** - Create separate playlists for each genre
- **Year playlists** - View music from specific decades
- **Rating playlists** - Filter by your ratings
- **Play count** - Find your most or least played tracks
- **Recently added** - See what you've imported recently
- **Custom filters** - Combine multiple criteria for complex filtering
