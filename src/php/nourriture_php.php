<?php


require("private_database.php");

// Start XML file, create parent node
$doc = domxml_new_doc("1.0");
$node = $doc->create_element("services");
$parnode = $doc->append_child($node);

// Opens a connection to a MySQL server
$connection=mysql_connect ('localhost', $username, $password);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Set the active MySQL database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

// Select all the rows in the services table
$query = "SELECT * FROM `prop-me-too`.services WHERE description="Nourriture";"
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header("Content-type: text/xml");

// Iterate through the rows, adding XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
  // Add to XML document node
  $node = $doc->create_element("services");
  $newnode = $parnode->append_child($node);

  $newnode->set_attribute("description", $row['description']);
  $newnode->set_attribute("latitude", $row['latitude']);
  $newnode->set_attribute("longitude", $row['longitude']);
  $newnode->set_attribute("name", $row['name']);
  $newnode->set_attribute("usage", $row['usage']);
  $newnode->set_attribute("id", $row['id']);
}

$xmlfile = $doc->dump_mem();
echo $xmlfile;



?>