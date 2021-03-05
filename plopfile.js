module.exports = plop => {
    plop.setGenerator('atom', {
        description: 'Create a atom',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your atom name?'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/atoms/{{pascalCase name}}.js',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atom.js.hbs',
            },
        ],
    });
    plop.setGenerator('molecule', {
        description: 'Create a molecule',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your molecule name?'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/molecules/{{pascalCase name}}.js',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Molecule.js.hbs',
            },
        ],
    });
};