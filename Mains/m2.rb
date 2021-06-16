# Finding a specific key by value and
# accessing its other keys and values
# inside of an Array of Hashes.

OCs = [
  {
    "Name" => "Rune",
    "ID" => 1
  },
  {
    "Name" => "Luna",
    "ID" => 2
  }
]

OC = OCs.find { |ocs| ocs["ID"] == 1 }
puts OC["Name"]