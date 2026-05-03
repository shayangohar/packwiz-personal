// server_scripts/add_budding_recipes.js

ServerEvents.recipes(event => {
  const georeResources = [
    { resource: 'coal',      block: 'minecraft:coal_block' },
    { resource: 'copper',    block: 'minecraft:copper_block' },
    { resource: 'diamond',   block: 'minecraft:diamond_block' },
    { resource: 'emerald',   block: 'minecraft:emerald_block' },
    { resource: 'gold',      block: 'minecraft:gold_block' },
    { resource: 'iron',      block: 'minecraft:iron_block' },
    { resource: 'lapis',     block: 'minecraft:lapis_block' },
    { resource: 'redstone',  block: 'minecraft:redstone_block' },
    { resource: 'quartz',    block: 'minecraft:quartz_block' },
    { resource: 'zinc',      block: 'create:zinc_block' },
    { resource: 'nickel',    block: 'oritech:nickel_block' },
    { resource: 'platinum',  block: 'oritech:platinum_block' },
    { resource: 'uranium',   block: 'oritech:uranium_dust_block' },
  ]

  georeResources.forEach(function(entry) {
    event.recipes.create.deploying(
      'geore:budding_' + entry.resource,
      [
        'minecraft:budding_amethyst',
        entry.block
      ]
    ).id('kubejs:geore_budding_' + entry.resource)
  })
})