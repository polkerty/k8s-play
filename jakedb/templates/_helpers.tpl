{{- define "dog" }}
head: smiling
tail: wagging
body: fluffy
chart: {{ .Chart.Name }}
version: {{ .Chart.Version }}
{{- end }}
