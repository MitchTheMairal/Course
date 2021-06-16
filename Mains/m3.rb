# Deleting a key by value inside an Array
# of Hashes.

OCs = [
  {
    "OC_Name" => "Rune",
    "ID" => 1
  },
  {
    "OC_Name" => "Luna",
    "ID" => 2
  }
]

Removed = OCs.delete_if {
  |ocs| ocs["OC_Name"] == "Rune"
}
puts Removed