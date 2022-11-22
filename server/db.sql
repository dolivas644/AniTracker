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
    mal_id integer NOT NULL,
    title text,
    image text
);


ALTER TABLE public.anime OWNER TO tpl522_3;

--
-- Name: anime_mal_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_3
--

ALTER TABLE public.anime ALTER COLUMN mal_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.anime_mal_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: comment; Type: TABLE; Schema: public; Owner: tpl522_3
--

CREATE TABLE public.comment (
    comment_id integer NOT NULL,
    "Text" text,
    user_id integer,
    anime_id integer
);


ALTER TABLE public.comment OWNER TO tpl522_3;

--
-- Name: comment_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_3
--

ALTER TABLE public.comment ALTER COLUMN comment_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.comment_comment_id_seq
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
    anime_id integer,
    complete boolean DEFAULT false
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

COPY public.anime (mal_id, title, image) FROM stdin;
32365	Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi	https://cdn.myanimelist.net/images/anime/6/77678l.jpg
42989	Magical Death	https://cdn.myanimelist.net/images/anime/1209/109527l.jpg
53236	Road of Naruto	https://cdn.myanimelist.net/images/anime/1731/128787l.jpg
1	Cowboy Bebop	https://cdn.myanimelist.net/images/anime/4/19644l.jpg
10075	Naruto x UT	https://cdn.myanimelist.net/images/anime/3/30485l.jpg
20	Naruto	https://cdn.myanimelist.net/images/anime/13/17405l.jpg
28755	Boruto: Naruto the Movie	https://cdn.myanimelist.net/images/anime/4/78280l.jpg
2937	Bishoujo Senshi Sailor Moon R: Make Up! Sailor Senshi	https://cdn.myanimelist.net/images/anime/1822/117349l.jpg
120	Fruits Basket	https://cdn.myanimelist.net/images/anime/4/75204l.jpg
6746	Durarara!!	https://cdn.myanimelist.net/images/anime/10/71772l.jpg
3470	Special A	https://cdn.myanimelist.net/images/anime/8/77363l.jpg
33755	Ma Shen	https://cdn.myanimelist.net/images/anime/6/81481l.jpg
2923	Shugo Chara!	https://cdn.myanimelist.net/images/anime/7/5061l.jpg
11499	Sankarea	https://cdn.myanimelist.net/images/anime/1487/95651l.jpg
16870	The Last: Naruto the Movie	https://cdn.myanimelist.net/images/anime/10/67631l.jpg
1010	Ranma ½: Chou Musabetsu Kessen! Ranma Team vs. Densetsu no Houou	https://cdn.myanimelist.net/images/anime/1985/107722l.jpg
52833	Nana	https://cdn.myanimelist.net/images/anime/1086/127185l.jpg
325	Peach Girl	https://cdn.myanimelist.net/images/anime/13/75579l.jpg
334	Marmalade Boy	https://cdn.myanimelist.net/images/anime/8/6092l.jpg
10686	Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!	https://cdn.myanimelist.net/images/anime/9/30813l.jpg
34580	Nana Maru San Batsu	https://cdn.myanimelist.net/images/anime/1818/121071l.jpg
50680	Love Love Campus	https://cdn.myanimelist.net/images/anime/1595/120259l.jpg
31417	Binan Koukou Chikyuu Bouei-bu LOVE! LOVE!	https://cdn.myanimelist.net/images/anime/13/79937l.jpg
6055	F	https://cdn.myanimelist.net/images/anime/9/73616l.jpg
37103	Danganronpa 3: Monokuma Gekijou	https://cdn.myanimelist.net/images/anime/8/90004l.jpg
29597	Hana	https://cdn.myanimelist.net/images/anime/4/71195l.jpg
53240	Naruto: Road of Naruto	https://cdn.myanimelist.net/images/anime/1207/128768l.jpg
34566	Boruto: Naruto Next Generations	https://cdn.myanimelist.net/images/anime/9/84460l.jpg
7367	Naruto: The Cross Roads	https://cdn.myanimelist.net/images/anime/11/27050l.jpg
322	Paradise Kiss	https://cdn.myanimelist.net/images/anime/7/80636l.jpg
5042	Kiss x Sis	https://cdn.myanimelist.net/images/anime/1966/121554l.jpg
13931	Bishoujo Senshi Sailor Moon: Sailor Stars - Hero Club	https://cdn.myanimelist.net/images/anime/10/69247l.jpg
1240	Bishoujo Senshi Sailor Moon SuperS: Sailor 9 Senshi Shuuketsu! Black Dream Hole no Kiseki	https://cdn.myanimelist.net/images/anime/1952/117493l.jpg
1943	Paprika	https://cdn.myanimelist.net/images/anime/1929/93629l.jpg
40200	Paprika (Music)	https://cdn.myanimelist.net/images/anime/1023/102380l.jpg
530	Bishoujo Senshi Sailor Moon	https://cdn.myanimelist.net/images/anime/1440/92258l.jpg
14751	Bishoujo Senshi Sailor Moon Crystal	https://cdn.myanimelist.net/images/anime/11/60085l.jpg
9513	Beelzebub	https://cdn.myanimelist.net/images/anime/3/28013l.jpg
29727	Paradise	https://cdn.myanimelist.net/images/anime/5/71482l.jpg
5663	G.T.R G-cup Teacher Rei	https://cdn.myanimelist.net/images/anime/1181/103963l.jpg
8408	Durarara!! Specials	https://cdn.myanimelist.net/images/anime/4/28684l.jpg
27833	Durarara!!x2 Ketsu	https://cdn.myanimelist.net/images/anime/6/77838l.jpg
\.


--
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: tpl522_3
--

COPY public.comment (comment_id, "Text", user_id, anime_id) FROM stdin;
1	Love the style and hope the best for George	5	322
3	GEORGE MARRY ME	3	322
2	Fav fashion anime 	3	322
4	AHHHHH	1	322
5	AHHHHH	1	322
6	my comfort anime ...........	5	322
7	Swim team goals.	5	325
8	Swim team goals.	5	325
9	Swim team goals.	5	322
13	AMUUUU miss you	5	2923
14	THIS IS THE BEST ANIME FOR NANA FANS	5	322
15	NEEDS ONE MORE SEASON	1	322
16	Ikuto X Amu 	5	2923
17	SAUSSSS___GAYYY	5	53240
18	Diana was here	5	322
19	ahh	5	53240
\.


--
-- Data for Name: user_anime_list; Type: TABLE DATA; Schema: public; Owner: tpl522_3
--

COPY public.user_anime_list (id, user_id, anime_id, complete) FROM stdin;
47	5	5042	t
50	5	1943	t
52	1	530	t
53	1	14751	t
22	1	28755	t
54	1	9513	f
55	1	322	t
56	5	29727	t
58	5	2923	t
59	5	6746	t
60	5	8408	t
32	5	1010	t
33	1	52833	t
34	1	325	t
17	1	32365	t
19	1	1	t
20	1	10075	t
36	5	10686	t
37	5	34580	t
39	5	31417	t
40	5	6055	t
38	5	50680	t
41	5	37103	t
42	5	29597	t
43	5	53240	t
35	5	334	t
45	5	7367	t
48	5	13931	t
44	5	34566	t
46	5	322	t
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_3
--

COPY public.users (id, name, picture, email, sub) FROM stdin;
1	Diana	https://lh3.googleusercontent.com/a/ALm5wu17OfIzUPfus6_3_Dc2QGsMDmySXUCbmLjWYANM=s96-c	dolivas644@gmail.com	google-oauth2|111855241845911927780
3	Diana	https://lh3.googleusercontent.com/a/ALm5wu37DG_8TfWnPE6txsyfaUe_ZR6gDFoND9OHc0sn=s96-c	animetracker938@gmail.com	google-oauth2|109259180976718515871
5	\N	https://s.gravatar.com/avatar/3840c11004bcc185904b5d55818e4388?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fdi.png	diana.mcr644@gmail.com	auth0|636aa861e8c293803d3086b1
\.


--
-- Name: anime_mal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
--

SELECT pg_catalog.setval('public.anime_mal_id_seq', 1, false);


--
-- Name: comment_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
--

SELECT pg_catalog.setval('public.comment_comment_id_seq', 19, true);


--
-- Name: user_anime_list_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
--

SELECT pg_catalog.setval('public.user_anime_list_id_seq', 61, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: anime anime_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.anime
    ADD CONSTRAINT anime_pkey PRIMARY KEY (mal_id);


--
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (comment_id);


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
-- Name: comment comment_anime_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_anime_id_fkey FOREIGN KEY (anime_id) REFERENCES public.anime(mal_id);


--
-- Name: comment comment_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: user_anime_list user_anime_list_anime_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.user_anime_list
    ADD CONSTRAINT user_anime_list_anime_id_fkey FOREIGN KEY (anime_id) REFERENCES public.anime(mal_id);


--
-- Name: user_anime_list user_anime_list_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_3
--

ALTER TABLE ONLY public.user_anime_list
    ADD CONSTRAINT user_anime_list_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

