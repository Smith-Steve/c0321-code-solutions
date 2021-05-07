select  "cy"."name" as "Country",
        count("c"."name")
from "cities" as "c"
join "countries" as "cy" using ("countryId")
group by "cy"."name"
