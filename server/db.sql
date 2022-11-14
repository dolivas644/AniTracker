--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: anime; Type: TABLE; Schema: public; Owner: tpl522_3
--

CREATE TABLE public.anime (
    id integer NOT NULL,
    mal_id character varying,
    image character varying,
    title text,
    completed boolean
);


ALTER TABLE public.anime OWNER TO tpl522_3;

--
-- Name: anime_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_3
--

ALTER TABLE public.anime ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.anime_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_anime_list; Type: TABLE; Schema: public; Owner: tpl522_3
--

CREATE TABLE public.user_anime_list (
    id integer NOT NULL,
    user_id integer,
    anime_id integer
);


ALTER TABLE public.user_anime_list OWNER TO tpl522_3;

--
-- Name: user_anime_list_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_3
--

ALTER TABLE public.user_anime_list ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_anime_list_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_3
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    picture character varying,
    email character varying NOT NULL,
    sub character varying
);


ALTER TABLE public.users OWNER TO tpl522_3;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_3
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: anime; Type: TABLE DATA; Schema: public; Owner: tpl522_3
--



--
-- Data for Name: user_anime_list; Type: TABLE DATA; Schema: public; Owner: tpl522_3
--

INSERT INTO public.user_anime_list (id, user_id, anime_id) OVERRIDING SYSTEM VALUE VALUES (1, NULL, NULL);
INSERT INTO public.user_anime_list (id, user_id, anime_id) OVERRIDING SYSTEM VALUE VALUES (2, NULL, NULL);
INSERT INTO public.user_anime_list (id, user_id, anime_id) OVERRIDING SYSTEM VALUE VALUES (3, 1, 1);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_3
--

INSERT INTO public.users (id, name, picture, email, sub) OVERRIDING SYSTEM VALUE VALUES (1, 'Diana', 'https://lh3.googleusercontent.com/a/ALm5wu17OfIzUPfus6_3_Dc2QGsMDmySXUCbmLjWYANM=s96-c', 'dolivas644@gmail.com', 'google-oauth2|111855241845911927780');
INSERT INTO public.users (id, name, picture, email, sub) OVERRIDING SYSTEM VALUE VALUES (3, 'Diana', 'https://lh3.googleusercontent.com/a/ALm5wu37DG_8TfWnPE6txsyfaUe_ZR6gDFoND9OHc0sn=s96-c', 'animetracker938@gmail.com', 'google-oauth2|109259180976718515871');
INSERT INTO public.users (id, name, picture, email, sub) OVERRIDING SYSTEM VALUE VALUES (5, NULL, 'https://s.gravatar.com/avatar/3840c11004bcc185904b5d55818e4388?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fdi.png', 'diana.mcr644@gmail.com', 'auth0|636aa861e8c293803d3086b1');


--
-- Name: anime_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
--

SELECT pg_catalog.setval('public.anime_id_seq', 1, false);


--
-- Name: user_anime_list_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
--

SELECT pg_catalog.setval('public.user_anime_list_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: anime anime_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.anime
    ADD CONSTRAINT anime_pkey PRIMARY KEY (id);


--
-- Name: user_anime_list user_anime_list_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.user_anime_list
    ADD CONSTRAINT user_anime_list_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: user_anime_unique; Type: INDEX; Schema: public; Owner: tpl522_3
--

CREATE UNIQUE INDEX user_anime_unique ON public.user_anime_list USING btree (user_id, anime_id);


--
-- Name: user_anime_list user_anime_list_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.user_anime_list
    ADD CONSTRAINT user_anime_list_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

