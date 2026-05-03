// server_scripts/geore_uranium_recipes.js

ServerEvents.recipes(event => {
  // Vanilla furnace smelting
  event.smelting('oritech:raw_uranium', 'geore:uranium_shard')

  // Vanilla blast furnace (Create bulk blasting is auto-generated from this)
  event.blasting('oritech:raw_uranium', 'geore:uranium_shard')
})