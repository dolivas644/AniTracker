/* Replace with your SQL commands */

CREATE TABLE public.anime (
    mal_id integer NOT NULL,
    title text,
    image text
);

CREATE TABLE public.comment (
    comment_id integer NOT NULL,
    "Text" text,
    user_id integer,
    anime_id integer
);

CREATE TABLE public.user_anime_list (
    id integer NOT NULL,
    user_id integer,
    anime_id integer,
    complete boolean DEFAULT false
);

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    picture character varying,
    email character varying NOT NULL,
    sub character varying
);

SELECT pg_catalog.setval('public.anime_mal_id_seq', 1, false);

SELECT pg_catalog.setval('public.comment_comment_id_seq', 19, true);

SELECT pg_catalog.setval('public.user_anime_list_id_seq', 61, true);

SELECT pg_catalog.setval('public.users_id_seq', 6, true);

CREATE UNIQUE INDEX user_anime_unique ON public.user_anime_list USING btree (user_id, anime_id);