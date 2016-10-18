 var db = window.openDatabase("cbdatabase", "1.0", "cbinfo", 1024*1000);

function delete_database(){
  
}

  function renderResults(tx, rs) {
    for(var i=0; i < rs.rows.length; i++) {
      r = rs.rows.item(i);
 	  console.log(r['com']);
    }
  }

function renderData() {
    db.transaction(function(tx) {
                 tx.executeSql('SELECT * FROM compes ', [], renderResults);
    });
}

function insert_database(com){
	db.transaction(function(tx) {
	  tx.executeSql('INSERT INTO compes (com) VALUES (?)',[com]);
	});	
	console.log('insert');
	renderData();
}

db.transaction(function(tx){
  tx.executeSql('CREATE TABLE IF NOT EXISTS compes (id INTEGER PRIMARY KEY, com TEXT)', []);
});  


ons.ready(function() {
  renderData()
	console.log('Ready!');
});
