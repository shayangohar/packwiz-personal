// client_scripts/hide_jei_items.js

RecipeViewerEvents.removeEntries('item', event => {
  const keywords = [
    'allthemodium',
    'vibranium',
    'unobtainium',
    'uraninite',
    'osmium',
    'monazite',
    'black_quartz',
    'aluminum',
    'tungsten',
    'silver',
  ]

  const exactSegments = [
    /(?:^|[_:])tin(?:_|$)/,
    /(?:^|[_:])lead(?:_|$)/,
  ]

  // Keywords to hide only from specific mods
  const modSpecific = {
    'geore': ['topaz', 'ruby', 'sapphire']
  }

  Item.getTypeList().forEach(id => {
    const idStr = id.toString()

    if (idStr.startsWith('minecraft:')) return

    if (
      keywords.some(keyword => idStr.includes(keyword)) ||
      exactSegments.some(regex => regex.test(idStr))
    ) {
      event.remove(idStr)
      return
    }

    // Check mod-specific keywords
    const [namespace] = idStr.split(':')
    if (modSpecific[namespace]) {
      if (modSpecific[namespace].some(keyword => idStr.includes(keyword))) {
        event.remove(idStr)
      }
    }
  })
})