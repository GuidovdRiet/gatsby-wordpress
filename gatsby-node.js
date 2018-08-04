const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const storeTemplate = path.resolve('src/templates/company.js');
    resolve(
      graphql(`
        {
          allWordpressWpCompany {
            edges {
              node {
                slug
                title
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allWordpressWpCompany.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: storeTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};
