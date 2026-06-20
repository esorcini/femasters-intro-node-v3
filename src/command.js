import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command(
    'new <note>', /* name of the command to execute */
    'Creates a new note', /* description of the command */
    yargs => {
      return yargs.positional('note', {
        type: 'string',
        description: 'The content of the note to create'
      })
    } /* OPTIONAL - Formatting, definining defaults, or operations for the parameters */,
    argv => {
      console.log(argv.note)
    } /* Function to execute with the command */
  )
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags for the note'
  })
  .command('all', 'get all notes', () => { }, async (argv) => {
    // implementation goes here
  })
  .command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
    // implementation goes here
  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
    // implementation goes here
  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {
    // implementation goes here
  })
  .command('clean', 'remove all notes', () => { }, async (argv) => {
    // implementation goes here
  })
  .demandCommand(1) /* makes the command required --> you cannot execute "note" by itself */
  .parse()