<%*
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

for (let i = 1; i < 251; i++) {
	let file = await app.vault.create("2 Notes/Science/Science Three " + i + ".md", "**" + i + "** " + lorem);
	await app.fileManager.processFrontMatter(file, fm => {
		fm["subcat"] = "subcat-three";
		fm["score"] = i;
	});
	console.log(i);
}
_%>*_*