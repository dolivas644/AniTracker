/* Replace with your SQL commands */

CREATE TABLE anime (
    mal_id integer NOT NULL,
    title text,
    image text
);

CREATE TABLE comment (
    comment_id integer NOT NULL,
    "Text" text,
    user_id integer,
    anime_id integer
);

CREATE TABLE user_anime_list (
    id integer NOT NULL,
    user_id integer,
    anime_id integer,
    complete boolean DEFAULT false
);

CREATE TABLE users (
    id integer NOT NULL,
    name character varying,
    picture character varying,
    email character varying NOT NULL,
    sub character varying
);

SELECT pg_catalog.setval('anime_mal_id_seq', 1, false);

SELECT pg_catalog.setval('comment_comment_id_seq', 19, true);

SELECT pg_catalog.setval('user_anime_list_id_seq', 61, true);

SELECT pg_catalog.setval('users_id_seq', 6, true);

CREATE UNIQUE INDEX user_anime_unique ON user_anime_list USING btree (user_id, anime_id);