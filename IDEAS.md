se sont des function en haut qui fait le setup pour garder en memoire les options

you can do that :
```typescript
	interface ok{
			test: Test
		}
	interface test{
			//something
		}
```

options = {
		accessTokenKey: string,
		refreshTokenKey: string,
		accessTokenAlgorithm?: string,
		refreshTokenAlgorithm?: string,
		algorithm?: string,
		dbusername?: string,
		dbpassword?: string,
		storageType: "json" | "sql",
	}
