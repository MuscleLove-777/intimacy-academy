/* ============================================
   インティマシーアカデミー - Level 4: フォアプレイと身体の理解
   ============================================ */

const LEVEL4_DATA = {
    id: 4,
    title: "フォアプレイと身体の理解",
    icon: "🔥",
    description: "身体の仕組みと前戯の重要性を学ぶ",
    modules: [

        {
            id: 401,
            title: "性的反応サイクル",
            duration: "10分",
            content: `
<h2>🔬 性的反応サイクル</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>身体がどのように反応するかを理解することで、<strong>お互いの身体をより深く理解</strong>し、満足度の高い体験につなげられます。</p>
</div>

<h3>📊 マスターズ＆ジョンソンの4段階モデル</h3>

<div class="visual-box">
<div class="visual-box-title">性的反応の4段階</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>① 興奮期（Excitement）</strong><br>
<span style="font-size:0.85rem;">心拍数・血圧上昇。性器への血流増加。潤滑液の分泌開始。</span>
</div>
<div style="background:#FFF3E0;border-left:4px solid #FF9800;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>② 高原期（Plateau）</strong><br>
<span style="font-size:0.85rem;">興奮が持続・高まる段階。筋肉の緊張が増加。</span>
</div>
<div style="background:#FCE4EC;border-left:4px solid #E91E63;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>③ オーガズム期（Orgasm）</strong><br>
<span style="font-size:0.85rem;">快感のピーク。リズミカルな筋収縮。男性は射精を伴う。</span>
</div>
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>④ 解消期（Resolution）</strong><br>
<span style="font-size:0.85rem;">身体が通常状態に戻る。リラックス感。男性にはリフラクトリー期間あり。</span>
</div>
</div>
</div>

<h3>🔄 男女の反応の違い</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #1976D2;">
<h4 style="color:#1976D2;">♂ 男性の特徴</h4>
<ul>
<li>興奮が<strong>比較的早く</strong>立ち上がる</li>
<li>視覚的刺激に反応しやすい</li>
<li>オーガズム後に<strong>リフラクトリー期間</strong>（回復時間）がある</li>
<li>加齢とともに回復時間が長くなる</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #E91E63;">
<h4 style="color:#E91E63;">♀ 女性の特徴</h4>
<ul>
<li>興奮に<strong>時間がかかる</strong>ことが多い（フォアプレイ重要）</li>
<li>触覚・心理的刺激に反応しやすい</li>
<li>リフラクトリー期間がない人も多い</li>
<li>クリトリス刺激がオーガズムの主要経路</li>
</ul>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">🔑 オーガズムギャップ</div>
<p>研究によると、異性間セックスにおいて<strong>男性の約95%がオーガズムに達する</strong>のに対し、<strong>女性は約65%</strong>とされています。この差を縮めるには：</p>
<ul>
<li><strong>十分なフォアプレイ</strong>（次のモジュールで詳しく）</li>
<li><strong>クリトリスへの直接的な刺激</strong></li>
<li><strong>コミュニケーション</strong>（何が気持ちいいか聞く）</li>
<li>挿入だけに頼らない</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>性的反応は<strong>興奮→高原→オーガズム→解消</strong>の4段階</li>
<li>男女で<strong>反応の速度と経路が異なる</strong></li>
<li><strong>オーガズムギャップ</strong>を意識し、パートナーの快感を大切にする</li>
</ul>
</div>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "性的反応サイクルの正しい順序はどれですか？", options: ["高原→興奮→オーガズム→解消", "興奮→高原→オーガズム→解消", "オーガズム→興奮→解消→高原", "興奮→オーガズム→高原→解消"], answer: 1, explanation: "マスターズ＆ジョンソンのモデルでは、興奮→高原→オーガズム→解消の順で進みます。" },
                { id: "q401_2", type: "choice", question: "オーガズムギャップを縮めるために最も重要なことは？", options: ["挿入時間を長くする", "フォアプレイとクリトリス刺激を重視する", "体位を頻繁に変える", "テクニックの教本を読む"], answer: 1, explanation: "女性のオーガズムはクリトリス刺激が主要経路であり、十分なフォアプレイが重要です。" },
            ]
        },

        {
            id: 402,
            title: "フォアプレイの技術",
            duration: "12分",
            content: `
<h2>💋 フォアプレイの技術</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>フォアプレイは「本番の前座」ではなく、<strong>性行為の最も重要な部分</strong>です。十分なフォアプレイが満足度を大きく左右します。</p>
</div>

<h3>⏰ フォアプレイの理想的な時間</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 研究データ</div>
<p>研究によると、女性が十分な興奮状態に達するには平均<strong>15〜20分</strong>のフォアプレイが必要とされています。急がず、お互いの身体を探索する時間として楽しみましょう。</p>
</div>

<h3>🗺 エロジェナスゾーン（性感帯）</h3>

<table>
<tr><th>部位</th><th>効果的なアプローチ</th><th>注意点</th></tr>
<tr><td>首筋・耳</td><td>軽いキス・息づかい</td><td>くすぐったい人もいるので反応を見る</td></tr>
<tr><td>唇</td><td>ゆっくりしたキスから深いキスへ</td><td>相手のペースに合わせる</td></tr>
<tr><td>鎖骨・肩</td><td>指先やキスで軽く触れる</td><td>力を入れすぎない</td></tr>
<tr><td>背中・腰</td><td>手のひらでゆっくりなでる</td><td>強さの好みは人それぞれ</td></tr>
<tr><td>内もも</td><td>指先で軽く触れる</td><td>焦って中心部に向かわない</td></tr>
</table>

<h3>💡 フォアプレイのコツ</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>ゆっくり始める</strong>
キスや愛撫から始めて徐々に進める。焦らないことが最大のコツ。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>全身を使う</strong>
性器だけに集中せず、全身をゆっくり探索する。反応が良い場所を見つける。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>反応を観察する</strong>
呼吸・声・体の動きから、何が気持ちいいかを読み取る。わからなければ聞く。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>言葉も使う</strong>
「きれいだね」「気持ちいい」など、言葉で相手を安心させる。
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ よくある間違い</div>
<ul>
<li><strong>フォアプレイを省略する</strong>：特に女性にとって不快・苦痛になる</li>
<li><strong>ポルノを参考にする</strong>：演出であり、現実のセックスとは異なる</li>
<li><strong>「察する」に頼る</strong>：反応がわからなければ素直に聞く</li>
<li><strong>自分の好みだけ優先する</strong>：パートナーの好みを最優先に</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>フォアプレイは<strong>最低15〜20分</strong>を目安に</li>
<li><strong>全身を探索</strong>し、性器だけに集中しない</li>
<li>相手の<strong>反応を観察</strong>し、わからなければ聞く</li>
</ul>
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "フォアプレイについて正しい認識はどれですか？", options: ["本番の前座なので手短に", "性行為の最も重要な部分の一つ", "男性には不要", "毎回同じことをすればよい"], answer: 1, explanation: "フォアプレイは前座ではなく、性行為の満足度を大きく左右する最も重要な部分です。" },
                { id: "q402_2", type: "choice", question: "フォアプレイでパートナーが何を好むかわからないとき、最善の方法は？", options: ["ポルノを参考にする", "察する力を鍛える", "素直に聞く", "自分の得意なことをする"], answer: 2, explanation: "わからないときは素直に聞くのが最善です。コミュニケーションが満足度を上げる鍵です。" },
            ]
        },

        {
            id: 403,
            title: "性行為の実践ガイド",
            duration: "12分",
            content: `
<h2>🌹 性行為の実践ガイド</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>良いセックスに「正解」はありません。<strong>お互いが心地よく、楽しめること</strong>が唯一の正解です。ポルノのような「パフォーマンス」ではなく、二人のコミュニケーションを大切にしましょう。</p>
</div>

<h3>🛡 コンドームの正しい使い方</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>確認する</strong>
使用期限を確認。パッケージに傷や空気の抜けがないか確認。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>開封する</strong>
端を慎重に開ける。歯や爪で傷つけないよう注意。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>装着する</strong>
先端の精液だまりの空気を抜きながら、勃起した状態で根元まで巻き下ろす。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>外す</strong>
射精後すぐに、根元を押さえながら抜き、口を結んで捨てる。
</div>
</div>
</div>

<h3>🔄 コミュニケーションしながら進める</h3>

<table>
<tr><th>場面</th><th>声かけの例</th></tr>
<tr><td>ペースの確認</td><td>「このペースで大丈夫？」「もっとゆっくりがいい？」</td></tr>
<tr><td>快感の共有</td><td>「気持ちいい」「ここが好き」</td></tr>
<tr><td>体位の変更</td><td>「こうしてみない？」「体勢変えようか」</td></tr>
<tr><td>痛みがある時</td><td>「ちょっと痛い」→ 即座に対応する</td></tr>
<tr><td>やめたい時</td><td>「ちょっと休憩しよう」「今日はここまでにしよう」→ 必ず尊重する</td></tr>
</table>

<h3>⚠️ 大切な心構え</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 知っておくべきこと</div>
<ul>
<li><strong>初めてはうまくいかなくて当然</strong>。焦らない</li>
<li><strong>挿入だけがセックスではない</strong>。触れ合い全体が性行為</li>
<li><strong>オーガズムがゴールではない</strong>。過程を楽しむ</li>
<li><strong>ポルノは演出</strong>。現実のセックスのお手本にしない</li>
<li><strong>体型・サイズへのコンプレックス</strong>は気にしすぎない。パートナーはあなた自身を求めている</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>コンドームは<strong>正しく使用</strong>する</li>
<li>行為中も<strong>常にコミュニケーション</strong>を取る</li>
<li>パフォーマンスより<strong>二人の心地よさ</strong>を優先</li>
</ul>
</div>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "良いセックスの「唯一の正解」はどれですか？", options: ["長時間続くこと", "特殊な体位を使うこと", "お互いが心地よく楽しめること", "オーガズムに達すること"], answer: 2, explanation: "良いセックスに決まった形はなく、お互いが心地よく楽しめることが唯一の正解です。" },
                { id: "q403_2", type: "choice", question: "パートナーが行為中に「痛い」と言ったとき、正しい対応は？", options: ["もう少し頑張ってみる", "即座に止めて確認する", "体位を変える", "気にしないでと言う"], answer: 1, explanation: "痛みがあれば即座に止めて「大丈夫？」と確認します。相手の身体と感情を最優先にしましょう。" },
            ]
        },

        {
            id: 404,
            title: "よくある悩みとトラブルシューティング",
            duration: "10分",
            content: `
<h2>🔧 よくある悩みとトラブルシューティング</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>性に関する悩みは<strong>非常に一般的</strong>です。恥ずかしがる必要はなく、多くは適切な知識と対処で改善できます。</p>
</div>

<h3>🔧 よくある悩みと対処法</h3>

<div class="collapsible">
<div class="collapsible-header">勃起不全・中折れ</div>
<div class="collapsible-body">
<p><strong>原因</strong>：緊張・ストレス・疲労・飲酒が多い。特に初めてのパートナーとは緊張が大きい。</p>
<p><strong>対処法</strong>：</p>
<ul>
<li>焦らない。プレッシャーが最大の敵</li>
<li>パートナーに正直に伝える。「緊張している」と言えばOK</li>
<li>挿入以外の方法で楽しむ選択肢もある</li>
<li>頻繁に起きる場合は泌尿器科に相談</li>
</ul>
</div>
</div>

<div class="collapsible">
<div class="collapsible-header">早漏</div>
<div class="collapsible-body">
<p><strong>原因</strong>：興奮しすぎ・慣れていない・体質。非常に一般的な悩み。</p>
<p><strong>対処法</strong>：</p>
<ul>
<li>フォアプレイを長くして、パートナーを先に満足させる</li>
<li>コンドームで感度を調整</li>
<li>一度射精した後、しばらくしてから再開する方法もある</li>
<li>気になる場合は泌尿器科に相談</li>
</ul>
</div>
</div>

<div class="collapsible">
<div class="collapsible-header">痛みを感じる（女性）</div>
<div class="collapsible-body">
<p><strong>原因</strong>：フォアプレイ不足・緊張・潤滑不足が最も多い。</p>
<p><strong>対処法</strong>：</p>
<ul>
<li>十分なフォアプレイ（最低15〜20分）</li>
<li>潤滑ゼリー（ローション）を使う</li>
<li>リラックスできる環境を作る</li>
<li>痛みが続く場合は婦人科に相談（膣痙など医学的原因の場合も）</li>
</ul>
</div>
</div>

<div class="collapsible">
<div class="collapsible-header">オーガズムに達しない</div>
<div class="collapsible-body">
<p><strong>原因</strong>：プレッシャー・刺激が合っていない・心理的な要因。</p>
<p><strong>対処法</strong>：</p>
<ul>
<li>オーガズムをゴールにしない（プレッシャーが原因のことも）</li>
<li>自分の身体を知る（自分で何が気持ちいいかを探る）</li>
<li>パートナーに好みを伝える</li>
<li>オーガズムなしでも楽しいセックスはある</li>
</ul>
</div>
</div>

<h3>🏥 専門家に相談すべきタイミング</h3>

<div class="info-box warning">
<div class="info-box-title">⚠️ こんなときは受診を</div>
<ul>
<li>性行為時に<strong>毎回痛みがある</strong></li>
<li><strong>勃起不全が継続</strong>する（心臓病などの兆候の可能性も）</li>
<li><strong>性欲の極端な変化</strong>（ホルモンの問題の可能性）</li>
<li><strong>STIの症状</strong>がある（排尿痛、発疹、分泌物）</li>
<li><strong>心理的な苦痛</strong>（性に対するトラウマや恐怖感）</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>性に関する悩みは<strong>非常に一般的</strong>で恥ずかしくない</li>
<li>多くは<strong>コミュニケーションと知識</strong>で改善できる</li>
<li>改善しない場合は<strong>専門家に相談</strong>する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q404_1", type: "choice", question: "緊張で勃起がうまくいかないとき、最善の対応はどれですか？", options: ["パートナーに隠す", "焦って無理に挿入する", "正直に伝え、挿入以外で楽しむ", "お酒を飲む"], answer: 2, explanation: "正直にパートナーに伝えることでプレッシャーが減り、挿入以外の方法で楽しむこともできます。" },
                { id: "q404_2", type: "choice", question: "女性が性行為中に痛みを感じる最も多い原因はどれですか？", options: ["体位が悪い", "フォアプレイ不足・緊張・潤滑不足", "パートナーの問題", "慣れの問題"], answer: 1, explanation: "痛みの最も多い原因はフォアプレイ不足と緊張による潤滑不足です。十分な時間をかけることが大切です。" },
            ]
        },
    ]
};
