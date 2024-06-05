let label = "Subcat One"; /* button display name */
let script = "Subcat One"; /* js file name (i.e. this file's name) */
let query = `["subcat":subcat-one]`;
let property = "science/subcat-one";

let ngfile = app.vault.getAbstractFileByPath("1 Note Gallery/Note Gallery.md");
let content = await app.vault.read(ngfile);
let ngproperty = app.metadataCache.getFileCache(ngfile).frontmatter["areas"];

function buttonstr(a, b, c) {
	return "> > ```meta-bind-button\n> > label: " + a + "\n> > style: " + c + "\n> > action:\n> >   type: js\n> >   file: 0 JavaScript/" + b + ".js\n> > ```"; /* see Science.js for explanation of this */
}

let offbuttonstr = buttonstr(label, script, "default");
let onbuttonstr = buttonstr(label, script, "primary");

if (!(ngproperty.contains(property))) {
	await app.vault.modify(ngfile, content
		.replace(offbuttonstr, onbuttonstr)
		.replace("() OR", "()  ")
		.replace(/```note-gallery\nquery: \'\(([\S\s]*?```)/, "```note-gallery\nquery: \'(" + query + " OR $1")
	);
	await app.fileManager.processFrontMatter(ngfile, fm => {fm["areas"].push(property)});
} else {
	await app.vault.modify(ngfile, content
		.replace(onbuttonstr, offbuttonstr)
		.replace(query + " OR ", "")
		.replace(/ ?undefined ?/, "")
		.replace("()  ", "() OR")
	);
	await app.fileManager.processFrontMatter(ngfile, fm => {fm["areas"] = fm["areas"].filter(x => {return x !== property})});
}