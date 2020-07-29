const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const {
    data: {
      allApp: { nodes: apps },
    },
  } = await graphql(`
    {
      allApp {
        nodes {
          appId
        }
      }
    }
  `)

  console.log(apps)
  if (!apps) return

  apps.forEach((app, index) => {
    const previous = index === apps.length - 1 ? null : apps[index + 1].appId
    const next = index === 0 ? null : apps[index - 1].appId

    if (app.appId) {
      createPage({
        path: app.appId,
        component: path.resolve(`./src/templates/app-template.tsx`),
        context: {
          appId: app.appId,
          next,
          previous,
        },
      })
    }
  })
}
