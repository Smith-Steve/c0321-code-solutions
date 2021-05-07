select "c"."name" as "Category", count("c"."name") as "Count"
from "actors" as "a"
join "castMembers" as "cm" using ("actorId")
join "films" as "f" using ("filmId")
join "filmCategory" as "fc" using ("filmId")
join "categories" as "c" using ("categoryId")
where "a"."actorId" = 176
group by "c"."name"
