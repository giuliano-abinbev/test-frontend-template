import fs from 'node:fs';
import path from 'node:path';

const toKebabCase = (str) => str
  .replace(/([a-z])([A-Z])/g, '$1-$2') // Add a hyphen between lowercase and uppercase letters
  .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
  .toLowerCase(); // Convert the entire string to lowercase

const setup = () => {
  const name = process.argv.find(arg => arg.startsWith('--name=')).replace('--name=', '');

  if (!name) {
    throw new Error(`Missing Project name. Please provide a name using --name="Your Project Name"`)
  }

  const project = {
    name: toKebabCase(name),
    Name: name
  }

  const files = fs.readdirSync(path.resolve(process.cwd())).filter(file => fs.statSync(file).isFile());

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const newContent = content
      .replace('{{ project.name }}', project.name)
      .replace('{{ project.Name }}', project.Name);

    if (file.startsWith('_')) {
      fs.rmSync(file);
      fs.writeFileSync(file.slice(1), newContent);
    } else {
      fs.writeFileSync(file, newContent);
    }
  });

  fs.rmSync(path.resolve(process.cwd(), '_internal'), { recursive: true, force: true });
}

setup();
