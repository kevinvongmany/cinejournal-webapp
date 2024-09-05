\c cinejournal_db;

CREATE TABLE "users" (
	"id" INTEGER NOT NULL UNIQUE,
	"first_name" VARCHAR NOT NULL,
	"last_name" VARCHAR NOT NULL,
	"email" VARCHAR NOT NULL,
	"password" VARCHAR NOT NULL,
	PRIMARY KEY("id")
);


CREATE TABLE "entries" (
	"id" INTEGER NOT NULL UNIQUE,
	"media_title" VARCHAR,
	"rating" INTEGER,
	"watched_ts" TIMESTAMP,
	"user_id" INTEGER,
	"platform_id" INTEGER NOT NULL,
	PRIMARY KEY("id")
);


CREATE TABLE "platforms" (
	"id" INTEGER NOT NULL UNIQUE,
	"name" VARCHAR,
	PRIMARY KEY("id")
);


ALTER TABLE "entries"
ADD FOREIGN KEY("user_id") REFERENCES "users"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE "entries"
ADD FOREIGN KEY("platform_id") REFERENCES "platforms"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;