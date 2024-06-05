let ngfile = app.vault.getAbstractFileByPath("1 Note Gallery/Note Gallery.md");
await app.fileManager.processFrontMatter(ngfile, fm => {fm["minscore"] = 0});

let query = `(["score":>0] OR )   path:"2 Notes/Science/"`;
let property = "science";

let scoreselect = "> [!multi-column|center-fixed]\n> > [!div]\n> > `INPUT[number:minscore]`\n>\n> > [!div]\n> > ```meta-bind-button\n> > label: Apply\n> > style: destructive\n> > action:\n> >   type: js\n> >   file: 0 JavaScript\/Apply.js\n> > ```" /* replace 0 JavaScript/ with wherever you put your js files (escape slashes) */

let firstArr = [ /* Top row of buttons (main categories) */
	["Science", "Science", "primary"], /* button display name, js file name, (optional) button style (add primary to the file's corresponding button) */
    ["History", "History"],
    ["Literature", "Literature"]
];
let secondArr = [ /* Second row of buttons (subcategories) */
	["Subcat One", "Subcat One"],
    ["Subcat Two", "Subcat Two"],
    ["Subcat Three", "Subcat Three"],
];

function buttonstr(a, b, c) {
	return "> > ```meta-bind-button\n> > label: " + a + "\n> > style: " + c + "\n> > action:\n> >   type: js\n> >   file: 0 JavaScript/" + b + ".js\n> > ```"; /* replace 0 JavaScript/ with wherever you're keeping your js files */
}


function arrToString(arr) {
	let color;
	let str = "> [!multi-column|center-fixed]\n";
	if (!arr) {
		return "";
	}
	let last = arr?.pop();
	for (let ele of arr) {
		if (ele?.[2] && !(ele?.[2] == undefined)) {
			color = ele?.[2];
		} else {
			color = "default";
		}
		str += "> > [!div]\n" + buttonstr(ele?.[0], ele?.[1], color) + "\n>\n"
	}
	if (last?.[2] && !(last?.[2] == undefined)) {
		color = last?.[2];
	} else {
		color = "default";
	}
	str += "> > [!div]\n" + buttonstr(last?.[0], last?.[1], color);
	return str;
}

let content = await app.vault.read(ngfile);
let firstrow = arrToString(firstArr);
let secondrow = arrToString(secondArr);
await app.vault.modify(ngfile, content
	.replace(/>[\S\s]*```note-gallery/, firstrow + "\n\n---\n\n" + scoreselect + "\n\n---\n\n" + secondrow + "\n\n---\n\n```note-gallery")
	.replace(/```note-gallery[\S\s]*?```/, "```note-gallery\nquery: '() OR " + query + "'\nsort: asc\nsortBy: name\n```")
);
await app.fileManager.processFrontMatter(ngfile, fm => {fm["areas"] = [property]});

app.commands.executeCommandById("note-gallery:drop-database");