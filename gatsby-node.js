const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const createCompanies = new Promise((resolve, reject) => {
    const companyTemplate = path.resolve('src/templates/Company.js');
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
            path: `winkels/${edge.node.slug}`,
            component: companyTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
      })
    );
  });

  // Page name in cms needs to be the same as Template
  const createPages = new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allWordpressPage(filter: { slug: { ne: "home" } }) {
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
        result.data.allWordpressPage.edges.forEach(edge => {
          const template = path.resolve(`src/templates/${edge.node.title}.js`);
          createPage({
            path: edge.node.slug,
            component: template,
            context: {
              slug: edge.node.slug,
            },
          });
        });
      })
    );
  });

  Promise.all([createCompanies, createPages]);
};
