// server_scripts/remove_budding_recipes.js

ServerEvents.recipes(event => {

  // Remove all geore budding_* assembler recipes
  event.remove({ id: /^oritech:assembler\/compat\/geore\/budding.*$/ })

  // Remove vanilla budding amethyst assembler recipe
  event.remove({ id: 'oritech:assembler/amethystbud' })

})