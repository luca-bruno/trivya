# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TrivyaApiserver.Repo.insert!(%TrivyaApiserver.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias TrivyaApiserver.Repo
alias TrivyaApiserver.Schemas.Question

# Test seeds
Repo.insert! %Question{
  content: "Phoenix Framework",
  content_in_maltese: "Bruh",
  difficulty: "Hard"
}
