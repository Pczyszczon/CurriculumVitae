# CurriculumVitae
To check progress in app, you need to create react native project, and replace index.android file with that one, download all npm files, and change last line to fit your app name.

After some changes, I'll upload APK file

Icons will not work untill adding:

<code>
project.ext.vectoricons = [
    iconFontNames: [ 'FontAwesome.ttf'] // Name of the font files you want to copy
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
</code>

to android/app/build.gradle file
